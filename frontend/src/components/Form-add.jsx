import React, { useState } from 'react';
import axios from 'axios';
import AddHouse from '@/components/add-house.vue';

function AddForm() {
  const [loading, setLoading] = useState(false);
  const [house, setHouse] = useState({
    housePic: '',
    roomPic: ''
  });
  const [house_id, setHouseId] = useState('');
  const [roomNbrs, setRoomNbrs] = useState('');
  const [subPosition, setSubPosition] = useState(0);

  const uploadImage = (ref, event) => {
    setLoading(true);
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ozbl32lz');
    axios.post('https://api.cloudinary.com/v1_1/dssb587ew/upload', formData)
      .then(response => {
        console.log(response);
        setLoading(false);
        switch (ref) {
          case 'house':
            setHouse({ ...house, housePic: response.data.secure_url });
            break;
          case 'room':
            setHouse({ ...house, roomPic: response.data.secure_url });
            break;
          default:
            break;
        }
      });
  };

  const onSubmitFloor = () => {
    axios.post('http://127.0.0.1:8000/api/Floors', {
      house_id: house_id,
      roomNbrs: roomNbrs
    }, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${document.cookie}`,
      }
    }).then(res => {
      setSubPosition(subPosition + 1);
    });
  };

  return (
    <div>
      <AddHouse />
    </div>
  );
}

export default AddForm;
