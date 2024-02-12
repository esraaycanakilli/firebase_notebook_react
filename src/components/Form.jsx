import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { BsCardImage } from "react-icons/bs";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

const Form = ({ user }) => {
  const noteCol = collection(db, "notes");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textContent = e.target[0].value;
    const imageContent = e.target[1].files[0];

    if (!textContent && !imageContent) {
      return toast.info("Lütfen notunuzu ekleyin...");
    }

    try {
      await addDoc(noteCol, {
        textContent,
        imageContent: null,
        createdAt:serverTimestamp(),
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
        isFinished: false,
      });

      toast.success("Not başarıyla eklendi");
    } catch (error) {
      console.error("Firestore Hatası:", error);
      toast.error("Not eklenirken bir hata oluştu");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 p-4 border-b-[1px] border-gray-700  justify-center"
    >
      <img
        className="rounded-full h-[35px] md:h-[45px] mt-1"
        src={user?.photoURL}
        alt=""
      />
      <div>
        <textarea
          className="w-full my-2 outline-none text-normal md:text-lg text-black rounded"
          placeholder="Notunuzu bu alana ekleyebilirsiniz"
          type="text"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className="flex justify-between items-center">
          <label
            className="hover:bg-purple-800 text-lg transition p-3 cursor-pointer rounded-full "
            htmlFor="image"
          >
            <BsCardImage />
          </label>
          <input className="hidden" id="image" type="file" />
          <button className="bg-purple-600 flex items-center px-5 py-1 rounded-full transition hover:bg-purple-800">
            Ekle
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
