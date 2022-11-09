import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import client from "../apollo-client";
import { LazyImage } from "../components";
import { LOGIN } from "../graphql/mutations";

const Login = () => {
  const router = useRouter();
  return (
    <div className="login-screen-wrapper">
      <div className="login-screen-inner">
        <div className="form-wrapper">
          <div className="form-inner">
            <div className="logo">
              <LazyImage
                style={{ maxWidth: "100%", cursor: "pointer" }}
                src="/images/logo.png"
                alt="Signarama Toronto"
                link="/"
              />
            </div>
            <form
              className="contact-form"
              onSubmit={async (e) => {
                const { email, password } = e.target;
                e.preventDefault();
                if (email.value.trim() === "" || password.value.trim() === "") {
                  alert("Invalid Credentials");
                  return;
                }
                try {
                  const { data, loading, error } = await client.mutate({
                    mutation: LOGIN,
                    variables: {
                      email: email.value.trim().toLowerCase(),
                      password: password.value.trim(),
                    },
                  });
                  if (data) {
                    localStorage.setItem(
                      "signarama_token",
                      data?.loginUser?.token
                    );
                    document.querySelector(
                      "#error-welcome"
                    ).innerHTML = `Logged in as ${data?.loginUser?.name}`;
                    setTimeout(function () {
                      router.push(`/admin/dashboard`);
                    }, 1000);
                  }
                } catch (error) {
                  document.querySelector("#error-welcome").innerHTML =
                    error?.message;
                }
              }}
            >
              <div className="fields-wrapper">
                <label> Email </label>
                <input name="email" />
              </div>
              <div className="fields-wrapper">
                <label> Password </label>
                <input name="password" type="password" />
              </div>

              <div className="fields-wrapper formctas">
                <button type={`submit`}>
                  <span>{`Login`}</span>
                </button>
              </div>
            </form>
            <p id="error-welcome"> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
