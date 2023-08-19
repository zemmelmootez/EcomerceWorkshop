import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/slices/ProductSlice';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';

function AddProduct() {

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //new state
  const [imgLink,setLink]=useState()

  const handleShow = () => setShow(true);
    const dispatch=useDispatch()
  
 const [newProduct,addNew]=useState({})
 useEffect(()=>{
    addNew({...newProduct,imgLink:imgLink})

 },[imgLink])
 const addP=(e)=>{
 

    e.preventDefault()
    dispatch(addProduct(newProduct))
    setShow(false);
  }
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label>product name</label>
                <input type='text' placeholder=' enter product name' onChange={(e)=>addNew({...newProduct,name:e.target.value})}></input>
                <label>product description</label>
                <input type='text' placeholder=' enter product description'  onChange={(e)=>addNew({...newProduct,description:e.target.value})}></input>
                 <CloudinaryUploadWidget setLink={setLink}/>
                <label>product price</label>
                <input type='text' placeholder=' enter product price' onChange={(e)=>addNew({...newProduct,price:e.target.value})}></input>
                </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addP}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;