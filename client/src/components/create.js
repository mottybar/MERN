import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   item1: "",
   item2: "",
   item3: "",
   item4: "",
   item5: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", item2: "", item4: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <br />
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Almonds"
             value="Almonds"
             checked={form.item1 === "Almonds"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Almonds" className="form-check-label">Almonds</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Honey"
             value="Honey"
             checked={form.item1 === "Honey"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Honey" className="form-check-label">Honey</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Avocado"
             value="Avocado"
             checked={form.item1 === "Avocado"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Avocado" className="form-check-label">Avocado</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Greengrapes"
             value="Green grapes"
             checked={form.item1 === "Green grapes"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Green grapes" className="form-check-label">Green grapes</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Wholeweatflour"
             value="Whole weat flour"
             checked={form.item1 === "Whole weat flour"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Wholeweatflour" className="form-check-label">Whole weat flour</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Cottagecheese"
             value="Cottage cheese"
             checked={form.item1 === "Cottage cheese"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Cottagecheese" className="form-check-label">Cottage cheese</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Energydrink"
             value="Energy drink"
             checked={form.item1 === "Energy drink"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Energydrink" className="form-check-label">Energy drink</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Tomatojuice"
             value="Tomato juice"
             checked={form.item1 === "Tomato juice"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Tomatojuice" className="form-check-label">Tomato juice</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Yogurt"
             value="Yogurt"
             checked={form.item1 === "Yogurt"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Yogurt" className="form-check-label">Yogurt</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Greentea"
             value="Green tea"
             checked={form.item1 === "Green tea"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Greentea" className="form-check-label">Green tea</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Salad"
             value="Salad"
             checked={form.item1 === "Salad"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Salad" className="form-check-label">Salad</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Mineralwater"
             value="Mineral water"
             checked={form.item1 === "Mineral water"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Mineralwater" className="form-check-label">Mineral water</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Salmon"
             value="Salmon"
             checked={form.item1 === "Salmon"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Salmon" className="form-check-label">Salmon</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Antioxydantjuice"
             value="Antioxydant juice"
             checked={form.item1 === "Antioxydant juice"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Antioxydantjuice" className="form-check-label">Antioxydant juice</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1Frozensmoothie"
             value="Frozen smoothie"
             checked={form.item1 === "Frozen smoothie"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1Frozensmoothie" className="form-check-label">Frozen smoothie</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1spinach"
             value="spinach"
             checked={form.item1 === "spinach"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1spinach" className="form-check-label">Spinach</label>
         </div>


         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item1Options"
             id="item1oliveoil"
             value="olive oil"
             checked={form.item1 === "olive oil"}
             onChange={(e) => updateForm({ item1: e.target.value })}
           />
           <label htmlFor="item1oliveoil" className="form-check-label">Olive oil</label>
         </div>





       </div>
       <br />
       

        


       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Almonds"
             value="Almonds"
             checked={form.item2 === "Almonds"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Almonds" className="form-check-label">Almonds</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Honey"
             value="Honey"
             checked={form.item2 === "Honey"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Honey" className="form-check-label">Honey</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Avocado"
             value="Avocado"
             checked={form.item2 === "Avocado"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Avocado" className="form-check-label">Avocado</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Greengrapes"
             value="Green grapes"
             checked={form.item2 === "Green grapes"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Greengrapes" className="form-check-label">Green grapes</label>
         </div> 

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Wholeweatflour"
             value="Whole weat flour"
             checked={form.item2 === "Whole weat flour"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Wholeweatflour" className="form-check-label">Whole weat flour</label>
         </div>

      
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Cottagecheese"
             value="Cottage cheese"
             checked={form.item2 === "Cottage cheese"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Cottagecheese" className="form-check-label">Cottage cheese</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Energydrink"
             value="Energy drink"
             checked={form.item2 === "Energy drink"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Energydrink" className="form-check-label">Energy drink</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Tomatojuice"
             value="Tomato juice"
             checked={form.item2 === "Tomato juice"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Tomatojuice" className="form-check-label">Tomato juice</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Yogurt"
             value="Yogurt"
             checked={form.item2 === "Yogurt"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Yogurt" className="form-check-label">Yogurt</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Greentea"
             value="Green tea"
             checked={form.item2 === "Green tea"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Greentea" className="form-check-label">Green tea</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Salad"
             value="Salad"
             checked={form.item2 === "Salad"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Salad" className="form-check-label">Salad</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Mineralwater"
             value="Mineral water"
             checked={form.item2 === "Mineral water"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Mineralwater" className="form-check-label">Mineral water</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Salmon"
             value="Salmon"
             checked={form.item2 === "Salmon"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Salmon" className="form-check-label">Salmon</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Antioxydantjuice"
             value="Antioxydant juice"
             checked={form.item2 === "Antioxydant juice"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Antioxydantjuice" className="form-check-label">Antioxydant juice</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2Frozensmoothie"
             value="Frozen smoothie"
             checked={form.item2 === "Frozen smoothie"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2Frozensmoothie" className="form-check-label">Frozen smoothie</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2spinach"
             value="spinach"
             checked={form.item2 === "spinach"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2spinach" className="form-check-label">Spinach</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item2Options"
             id="item2oliveoil"
             value="olive oil"
             checked={form.item2 === "olive oil"}
             onChange={(e) => updateForm({ item2: e.target.value })}
           />
           <label htmlFor="item2oliveoil" className="form-check-label">Olive oil</label>
         </div>



         


       </div>
       <br />




       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Almonds"
             value="Almonds"
             checked={form.item3 === "Almonds"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Almonds" className="form-check-label">Almonds</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Honey"
             value="Honey"
             checked={form.item3 === "Honey"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Honey" className="form-check-label">Honey</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Avocado"
             value="Avocado"
             checked={form.item3 === "Avocado"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item2Avocado" className="form-check-label">Avocado</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Greengrapes"
             value="Green grapes"
             checked={form.item3 === "Green grapes"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Greengrapes" className="form-check-label">Green grapes</label>
         </div> 

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Wholeweatflour"
             value="Whole weat flour"
             checked={form.item3 === "Whole weat flour"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Wholeweatflour" className="form-check-label">Whole weat flour</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Cottagecheese"
             value="Cottage cheese"
             checked={form.item3 === "Cottage cheese"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Cottagecheese" className="form-check-label">Cottage cheese</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Energydrink"
             value="Energy drink"
             checked={form.item3 === "Energy drink"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Energydrink" className="form-check-label">Energy drink</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Tomatojuice"
             value="Tomato juice"
             checked={form.item3 === "Tomato juice"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Tomatojuice" className="form-check-label">Tomato juice</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Yogurt"
             value="Yogurt"
             checked={form.item3 === "Yogurt"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Yogurt" className="form-check-label">Yogurt</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Greentea"
             value="Greentea"
             checked={form.item3 === "Green tea"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Greentea" className="form-check-label">Green tea</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Salad"
             value="Salad"
             checked={form.item3 === "Salad"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Salad" className="form-check-label">Salad</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Mineralwater"
             value="Mineral water"
             checked={form.item3 === "Mineral water"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Mineralwater" className="form-check-label">Mineral water</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Salmon"
             value="Salmon"
             checked={form.item3 === "Salmon"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Salmon" className="form-check-label">Salmon</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Antioxydantjuice"
             value="Antioxydant juice"
             checked={form.item3 === "Antioxydant juice"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Antioxydantjuice" className="form-check-label">Antioxydant juice</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3Frozensmoothie"
             value="Frozen smoothie"
             checked={form.item3 === "Frozen smoothie"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3Frozensmoothie" className="form-check-label">Frozen smoothie</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3spinach"
             value="spinach"
             checked={form.item3 === "spinach"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3spinach" className="form-check-label">Spinach</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item3Options"
             id="item3oliveoil"
             value="olive oil"
             checked={form.item3 === "olive oil"}
             onChange={(e) => updateForm({ item3: e.target.value })}
           />
           <label htmlFor="item3oliveoil" className="form-check-label">Olive oil</label>
         </div>






       </div>
       <br />





       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Almonds"
             value="Almonds"
             checked={form.item4 === "Almonds"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Intern" className="form-check-label">Almonds</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Honey"
             value="Honey"
             checked={form.item4 === "Honey"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Honey" className="form-check-label">Honey</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Avocado"
             value="Avocado"
             checked={form.item4 === "Avocado"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item2Avocado" className="form-check-label">Avocado</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Greengrapes"
             value="Green grapes"
             checked={form.item4 === "Green grapes"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Greengrapes" className="form-check-label">Green grapes</label>
         </div> 

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Wholeweatflour"
             value="Whole weat flour"
             checked={form.item4 === "Whole weat flour"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Wholeweatflour" className="form-check-label">Whole weat flour</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Cottagecheese"
             value="Cottage cheese"
             checked={form.item4 === "Cottage cheese"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Cottagecheese" className="form-check-label">Cottage cheese</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Energydrink"
             value="Energy drink"
             checked={form.item4 === "Energy drink"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Energydrink" className="form-check-label">Energy drink</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Tomatojuice"
             value="Tomato juice"
             checked={form.item4 === "Tomato juice"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Tomatojuice" className="form-check-label">Tomato juice</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Yogurt"
             value="Yogurt"
             checked={form.item4 === "Yogurt"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Yogurt" className="form-check-label">Yogurt</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Greentea"
             value="Green tea"
             checked={form.item4 === "Green tea"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Greentea" className="form-check-label">Green tea</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Salad"
             value="Salad"
             checked={form.item4 === "Salad"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Salad" className="form-check-label">Salad</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Mineralwater"
             value="Mineral water"
             checked={form.item4 === "Mineral water"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Mineralwater" className="form-check-label">Mineral water</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Salmon"
             value="Salmon"
             checked={form.item4 === "Salmon"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Salmon" className="form-check-label">Salmon</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Antioxydantjuice"
             value="Antioxydant juice"
             checked={form.item4 === "Antioxydant juice"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Antioxydantjuice" className="form-check-label">Antioxydant juice</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4Frozensmoothie"
             value="Frozen smoothie"
             checked={form.item4 === "Frozen smoothie"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Frozensmoothie" className="form-check-label">Frozen smoothie</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4spinach"
             value="spinach"
             checked={form.item4 === "spinach"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4Frozensmoothie" className="form-check-label">Spinach</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item4Options"
             id="item4oliveoil"
             value="olive oil"
             checked={form.item4 === "olive oil"}
             onChange={(e) => updateForm({ item4: e.target.value })}
           />
           <label htmlFor="item4oliveoil" className="form-check-label">Olive oil</label>
         </div>




       </div>
       <br />
       

       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Almonds"
             value="Almonds"
             checked={form.item5 === "Almonds"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Intern" className="form-check-label">Almonds</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Honey"
             value="Honey"
             checked={form.item5 === "Honey"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Honey" className="form-check-label">Honey</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Avocado"
             value="Avocado"
             checked={form.item5 === "Avocado"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Avocado" className="form-check-label">Avocado</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Greengrapes"
             value="Green grapes"
             checked={form.item5 === "Green grapes"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Greengrapes" className="form-check-label">Green grapes</label>
         </div> 

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Wholeweatflour"
             value="Whole weat flour"
             checked={form.item5 === "Whole weat flour"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Wholeweatflour" className="form-check-label">Whole weat flour</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Cottagecheese"
             value="Cottage cheese"
             checked={form.item5 === "Cottage cheese"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Cottagecheese" className="form-check-label">Cottage cheese</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Energydrink"
             value="Energy drink"
             checked={form.item5 === "Energy drink"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Energydrink" className="form-check-label">Energy drink</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Tomatojuice"
             value="Tomato juice"
             checked={form.item5 === "Tomato juice"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Tomatojuice" className="form-check-label">Tomato juice</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Yogurt"
             value="Yogurt"
             checked={form.item5 === "Yogurt"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Yogurt" className="form-check-label">Yogurt</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Greenteat"
             value="Green tea"
             checked={form.item5 === "Green tea"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Greentea" className="form-check-label">Green tea</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Salad"
             value="Salad"
             checked={form.item5 === "Salad"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Salad" className="form-check-label">Salad</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Mineralwater"
             value="Mineral water"
             checked={form.item5 === "Mineral water"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Mineralwater" className="form-check-label">Mineral water</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Salmon"
             value="Salmon"
             checked={form.item5 === "Salmon"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Salmon" className="form-check-label">Salmon</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Antioxydantjuice"
             value="Antioxydant juice"
             checked={form.item5 === "Antioxydant juice"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Antioxydantjuice" className="form-check-label">Antioxydant juice</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5Frozensmoothie"
             value="Frozen smoothie"
             checked={form.item5 === "Frozen smoothie"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5Frozensmoothie" className="form-check-label">Frozen smoothie</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5spinach"
             value="spinach"
             checked={form.item5 === "spinach"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5spinach" className="form-check-label">Spinach</label>
         </div>   

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="item5Options"
             id="item5oliveoil"
             value="olive oil"
             checked={form.item5 === "olive oil"}
             onChange={(e) => updateForm({ item5: e.target.value })}
           />
           <label htmlFor="item5oliveoil" className="form-check-label">Olive oil</label>
         </div>   




       </div>
       <br />
       

       <div className="form-group">
         <input
           type="submit"
           value="Create basket"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}