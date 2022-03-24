import Image from "next/image";
import LoginButton from "../components/LoginButton";
import Logo from "../components/Logo";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
} from "next-auth/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

function Home({ providers }) {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setTheme("light"));
  return (
    <div className="flex h-[100vh]">
      <div className="hidden md:flex  relative h-[100vh] w-[55vw]">
        <Image
          layout="fill"
          alt="twitter home"
          src="https://localiq.com/wp-content/uploads/2021/07/twitter-updates-twitter-news.png"
        />
      </div>
      <div className="flex-1 flex flex-col gap-10 justify-between items-start py-5">
        <Logo className="!text-[#1d9bf0]" />
        <div className="flex flex-col gap-8 p-4 justify-center ">
          <h3 className="text-7xl font-[Helvetica Neue] space-x-4 font-bold">
            Happening now
          </h3>
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-[Helvetica Neue] space-x-4 font-bold">
              Join Twitter today
            </h3>
            <div className="flex flex-col gap-4 " onClick={signIn}>
              <LoginButton
                name="Google"
                Icon={FcGoogle}
                onClick={() => signIn("google")}
              />
              <LoginButton
                name="Github"
                Icon={BsGithub}
                color=""
                onClick={() => signIn("github")}
              />
              {/* {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button onClick={() => signIn(provider.id)}>
                    Sign in with {provider.name}
                  </button>
                </div>
              ))} */}
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="my-4">Already have an account?</p>
          <LoginButton name={""} className="text-[#1d9bf0] font-semibold" />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  const providers = await getProviders(context);
  const csrfToken = await getCsrfToken(context);

  if (session && res) {
    // res.writeHead(302, {
    //   Location: "/",
    // });
    // res.end();

    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      //   session: undefined,
      providers,
      csrfToken,
    },
  };
}

export default Home;
