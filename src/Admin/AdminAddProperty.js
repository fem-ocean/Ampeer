import React, { useState } from 'react';
import styled from 'styled-components';

function AdminAddProperty() {

    const categoryOptions = ['Rent', 'Shortlet']

    const bedroomsOptions = ['Shared', '1 bedroom', '2 bedrooms', '3 bedrooms', '4+ bedrooms']

    const areaOptions = [ 'Oniru', 'Lekki phase1', 'Lekki phase1 right', 'Ikate', 'Salem', 'Ilasan', 'Jakande', 'Osapa', 'Agungi', 'Ologolo', 'Igboefon', 'Idado', 'Newroad', 'Chevron', 'Conservation road', 'Orchid road', 'Ikota', 'VGC', 'Ajah', 'Sangotedo', 'Awoyaya']


    const [category, setCategory] = useState(categoryOptions[0]);
    const [bedrooms, setBedrooms] = useState(bedroomsOptions[0]);
    const [area, setArea] = useState(areaOptions[0]);
    const [price, setPrice] = useState('');

    const handleCategoryChange = (e) =>{
        setCategory(e.target.value)
    }
    const handleBedroomChange = (e) =>{
        setBedrooms(e.target.value)
    }
    const handleAreaChange = (e) =>{
        setArea(e.target.value)
    }
       
    const handlePriceChange = (e) =>{
        setPrice(e.target.value)
    }
  
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        alert('A property has been Submitted')

    }

    
  
  
    const form = {
      height: '500px',
    }

  
    return (
      <div>
          <FormHolder> 
            
            <form onSubmit={handleFormSubmit} style={form}>
                <FormOne>    
                <label>Category:</label>
                <select value={category} onChange={handleCategoryChange}> 
                    {categoryOptions.map((item)=>(
                        <option>{item}</option>
                    ) )}                   
                </select>
  
                <label>Bedrooms:</label>
                <select value={bedrooms} onChange={handleBedroomChange}>
                    {bedroomsOptions.map((item)=>(
                        <option>{item}</option>
                    ))}
                </select>
  
                <label>Area:</label>
                <select value={area} onChange={handleAreaChange}>
                    {areaOptions.map((item)=>(
                        <option>{item}</option>
                    ))}
                </select>

                <label>Price:</label>
                <input type="number" name="price" id="price" min="100000" max="50000000" placeholder="Price of property" value={price} onChange={handlePriceChange}></input>
                </FormOne>

                <FormTwo>
                    <BoxOne>
                        <BoxOneCont>
                            <label>Thumbnail Picture</label>
                            <input type="file" name="picture" accept="image/png, image/gif, image/jpeg"></input>
                        </BoxOneCont>
                    </BoxOne>
                    <BoxTwo>
                        <BoxTwoCont>
                        <label>Interior Video</label>
                        <input type="file" name="intvideo" accept="video/*"></input>
                        </BoxTwoCont>
                    </BoxTwo>
                    <BoxThree>
                        <BoxThreeCont>
                        <label>Compound Video</label>
                        <input type="file" name="compvideo" accept="video/*"></input>
                        </BoxThreeCont>
                    </BoxThree>
                    <BoxFour>
                        <BoxFourCont>
                        <label>Street Video</label>
                        <input type="file" name="streetvideo" accept="video/*"></input>

                        </BoxFourCont>
                    </BoxFour>
                </FormTwo>
              
                <div style={{margin:'auto', width: '365px'}}>
                    {/* <input type="submit" style={style} value="Add Property" /> */}
                    <Input />
                </div>
            </form>

            

            

          </FormHolder>

        


      </div>
    )
}

const FormHolder = styled.div`
  width: 90%;
  height: 550px;
  border: 4px solid #DBF2EC;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
  
`

const FormOne = styled.div`
  width: 90%;
  height: 80px;
  /* border: 1px solid green;   */
  margin: auto;
  padding: 10px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`


const FormTwo = styled.div`
    width: 95%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* border: 3px solid blue; */
    justify-content: space-evenly;
    align-items: center;
    margin-top: 120px;
    margin: auto;
`

const BoxOne = styled.div`
    width: 500px;
    height: 100px;
    position: relative;
    /* border: 1px solid red; */
    background:  rgba(219, 242, 236, 0.2);
`

const BoxTwo = styled(BoxOne)``

const BoxThree = styled(BoxOne)``

const BoxFour = styled(BoxOne)``

const BoxOneCont = styled.div`
    width: 80%;
    height: 60px;
    /* border: 1px solid purple; */
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const BoxTwoCont = styled(BoxOneCont)``

const BoxThreeCont = styled(BoxOneCont)``

const BoxFourCont = styled(BoxOneCont)``

const Input = styled.input.attrs({type: 'submit', value: 'Add Property'})`
    background: rgba(44, 142, 113, 0.95);
    color: white;
    border: none;
    width: 300px;
    height: 60px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    transition: 0.2s;
    text-align: center;
    &:hover{
        background-color: rgba(44, 142, 113, 1);
    }
`
    


export default AdminAddProperty