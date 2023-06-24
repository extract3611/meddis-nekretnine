import FooterThree from "../../layout/footers/FooterThree";
import NavbarOne from "../../layout/headers/NavbarOne";

const layout=({children})=>{
    
    return(
        <>
        <NavbarOne/>
        {children}
             <FooterThree/>
             </>
    )
}
export default layout;