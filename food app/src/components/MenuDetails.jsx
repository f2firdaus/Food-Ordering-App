import { menuData } from "../menuData";
import { useParams } from "react-router-dom";
const MenuDetails = ({ showImage, setShowImage ,menuImage  }) => {
    const { id } = useParams();
    const selectRestraunt = menuData.find((restro) => restro.id === id);
    
    return (
        <>
      

      {/* Conditionally render the modal based on showModal state */}
      
        <div className="modal" onClick={() => setShowImage(!showImage)}>
          <div className="modal-content">
                    <div className="model-image">
                        
                        <img className="menuimage-large" src={menuImage} alt="" />
                                            </div>
                    <div>

                    </div>
          </div>
        </div>
      
        </>
    )
}
export default MenuDetails;