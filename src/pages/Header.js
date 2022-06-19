import { useNavigate } from "react-router-dom";
import  HeaderDiv  from "../style/HeaderStyle";

function Header(){
    const navigate = useNavigate();
    return(
        <HeaderDiv>
            <ul>
                <li onClick={()=>{navigate('/')}}>Home</li>
                <li onClick={()=>{navigate('/clip')}}>Clip</li>
            </ul>
        </HeaderDiv>
    )
}
export default Header;