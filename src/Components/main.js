import ResourceLinks from "./ResourceLinks"

import Footer from "./Footer"
const Main =({isAdmin, isLoggedIn})=>{ 
    
    return(
        <div className="col-lg-9 col-sm-12 d-flex flex-column container-fluid p-0" style={{ height: '100%', width: "100%", overflowY: 'auto' }}>
            <ResourceLinks 
            isAdmin={isAdmin}
            isLoggedIn={isLoggedIn}
            />
            <Footer/>
        </div>



    )
}

export default Main