// import { Profile } from "./profile";
import { auth } from "../config/firebase";
import { useState } from "react";
import db from "../config/firebase";
import { storage } from "../config/firebase";
import { updateDoc, addDoc, collection } from "firebase/firestore";

export function AddPicture() {

  const [isfile, setfile1] = useState("");
  const [loading, setloading] = useState(false);
  const [category, setcategory] = useState("Categories");
  const [categories, setcategories] = useState();
  const [highlight, sethighlight] = useState(false);


  const [errors, seterrors] = useState({});


  const validateForm = () => {
    let tempErrors = {};
    if (category === "Categories") {
      tempErrors.category = "Please select a Category";
    }
    if (!isfile) {
      tempErrors.file1 = "Please select a title Picture";
    }
    seterrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

 

  const upload = async () => {
    setloading(true)
    const docRef = await addDoc(collection(db, "Visual Chef"), {
      category: category,
    });

    if (isfile == null) return;
    storage
      .ref("/images/" + isfile.name)
      .put(isfile)
      .on("state_changed", alert("Product Successfully uploaded"), alert, () => {
        storage
          .ref("images")
          .child(isfile.name)
          .getDownloadURL()
          .then((imgUrl) => {
            console.log(imgUrl)
            updateDoc(docRef, {
              images: imgUrl,
            //   username: user?.displayName,
            });
          });
      });

      setloading(false)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      upload();

      console.log("form is valid");
      // console.log(isfile.name);
    } else {
      console.log("form is invalid");
      setloading(false)
    }
  };

  return (
    <div className="w-[100vw] flex flex-col items-center text-[#000009]">
      <div className="pt-[80px] h-[100vh] lg:w-[60%] w-[90vw]">
          <p className="text-center py-[1rem] text-[2rem]">Add A New Picture</p>
          <div className="flex flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="w-[90%] mb-[2rem] rounded-[10px] text-[1.5rem] border flex flex-col px-[1rem] pb-[2.5rem]"
            >
               <div
                onClick={() => {
                  setcategories(!categories);
                }}
                className="flex text-black mt-[2rem] px-[1rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p >{category}</p>
                <p>&#8964;</p>
              </div>
              {errors.category && <p className="error">{errors.category}</p>}

              {categories ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Palm Oil");
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    Palm Oil
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Bubbles");
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    Bubbles
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("BISD");
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    Beauty In Skin Diversity
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Smile");
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    Smile
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Gele");
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    Gele
                  </p>
                </div>
              ) : (
                ""
              )}

              <div className="mt-[2rem]">
                <h2>Add photo</h2>
                <div className="flex flex-col">
                  <div>
                    <input
                      className="mt-[1rem]"
                      type="file"
                   
                      name="photos"
                      onChange={(event) => {
                        setfile1(event.target.files[0]);
                      }}
                    />
                    {errors.file1 && <p className="error">{errors.file1}</p>}
                  </div>
 
                </div>
                <p className="text-[12px] mt-[1rem]">
                  Each picture must not exceed 5MB
                </p>
              </div>


                           <input
                type="submit"
                value={loading ? "Sending Product..." : "Post Picture"}
                className="text-center bg-[#3EB812] font-bold text-white mt-[2rem] border py-[0.5rem] rounded-[10px] items-center"
              />
            </form>
          </div>
        </div>
    </div>
  );
}