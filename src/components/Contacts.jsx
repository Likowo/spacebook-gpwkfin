import React from "react"
import { useContext } from "react"
import { AppContext } from "../context/app_context"

const Contacts = () => {
  // let { galacticHome } = useContext(AppContext)
  let { characters, galacticHome, grabCharacters } = useContext(AppContext)
  // console.log(characters);
  // console.log('GALACTIC HOME CONTACTS',galacticHome)

  let friends = grabCharacters(20)
  console.log(galacticHome)
  console.log(friends)

  return (
    <div className="universe">
      {galacticHome ? (
        galacticHome.map((ele, index) => {
          // arr1.map((x, i) => [x, arr2[i]]);

          let url = ele.url
          return (
            // <img src={ele.url}/>
            <div
              className="innerUniverse"
              style={{ backgroundImage: `url(${url})` }}
              key={ele.id} /**changed key prop unique identifier from {index} object to ele object {ele.id} to make sure every element produced by the map function has a unique identifier.*/
            > 
              {/* <div className='userImage'> 
                    <img src={friends[index].image}/>
                </div> */}

              {/* <div className="userImage">
                {friends && index < friends.length && friends[index].image && (
                  <img src={friends[index].image} alt="User Image" />
                )}
              </div> */}

              {/* <p className="userNameBackground">{friends[index].name}</p>

              <p className="userName">{friends[index].name}</p> */}
            </div>
          )
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Contacts
