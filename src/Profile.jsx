function Profile() {
    const isLoggedIn = Boolean(localStorage.getItem("session"));

    const handleLogout = () => {
      // axios
      // .delete(
      //   `${process.env.REACT_APP_BASEURL}authentication/session?api_key=${process.env.REACT_APP_APIKEY}`,
      //   {
      //     data: {
      //       session_id: localStorage.getItem("session"),
      //     },
      //   }
      // )
      localStorage.removeItem("session");
      //Panggil API delete
      window.location.reload();
      console.log("Logout");
    };
    if(isLoggedIn) {
        return (
          <>  
            <p>Profile</p>
            <button onClick={handleLogout}>Logout</button>
          </>  
        );
    }

    return "forbidden";
}

export default Profile;