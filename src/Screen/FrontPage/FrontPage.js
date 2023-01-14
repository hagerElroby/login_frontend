import React from "react";
import { useSelector } from "react-redux";
const FrontPage = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      {userInfo ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              fontSize: "60px",
            }}
          >
            Welcome {userInfo.name}
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            fontSize: "60px",
          }}
        >
          welcome
        </div>
      )}
    </div>
  );
};

export default FrontPage;
