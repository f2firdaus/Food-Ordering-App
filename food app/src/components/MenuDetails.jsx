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
                        {/* {selectRestraunt.menu.map(item => ( */}
                            {/* <p>{ item.item_name}</p> */}
                        {/* ))} */}
                        <img className="menuimage-large" src={menuImage} alt="" />
                        {/* {<button className="model-btn" onClick={() => setShowImage(!showImage)} >X</button>}    */}
                    </div>
                    <div>

                    </div>
          </div>
        </div>
      
        </>
    )
}
export default MenuDetails;