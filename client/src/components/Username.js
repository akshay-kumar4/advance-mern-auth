import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/username.module.css";

const Username = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="py-4 text-xl w-2/3 text-center text-gray-500">
              Hello Again!
            </h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>
          <form className="py-1" onSubmit="">
            <div className="profile flex justify-center py-4">
              <img src="" className={styles.profile_img} alt="" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input className="" type="text" placeholder="Username" />
              <button className={styles.btn} type="submit">
                Let's Go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
