function Profile() {
    const isLoggedIn = Boolean(localStorage.getItem("session"));

    const handleLogout = () => {
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