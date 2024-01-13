import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import axios from "axios";
import { gapi } from "gapi-script";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface onSuccessType {
  clientId: string;
  credential: string;
  select_by: string;
}
const clientId = process.env.REACT_GOOGLE_LOGIN_CLIENT_ID;
const GoogleButton = ({}) => {
  const { push } = useRouter();
  //   useEffect(() => {
  //     function start() {
  //       gapi.client.init({
  //         clientId,
  //         scope: "email",
  //       });
  //     }
  //     gapi.load("client:auth2", start);
  //   }, []);
  const onSuccess = async (response: CredentialResponse) => {
    console.log(response);
    try {
      const serverResponse = await axios.post(
        "http://localhost:4000/auth/google",
        { tokenId: response.credential },
        { withCredentials: true }
      );

      const redirectUrl = serverResponse.headers.location;
      const redirectResponse = await axios.get(redirectUrl);
      window.location.href = redirectUrl;
      console.log(redirectResponse.data);
    } catch {
      (error: any) => {
        console.error("Error sending token to the server", error.response);
      };
    }
  };

  const onFailure = () => {
    console.log("Authentication failure");
  };
  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onFailure}
          useOneTap
        ></GoogleLogin>
      </GoogleOAuthProvider>
    </div>
  );
};
export default GoogleButton;
