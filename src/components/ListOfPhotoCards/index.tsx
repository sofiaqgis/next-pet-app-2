import React, { useState, useEffect } from 'react'
import { PhotoCard } from '../PhotoCard/index'
// import { gql, useQuery } from '@apollo/client'
//import db from '../db.json'

// const ANIMALS_QUERY = gql`
//   query getPhotos {
//       photos {
//       id
//       categoryId
//       src
//       likes
//       userId
//       liked
//       }
//   }
// `

interface PhotoCard {
  id: number;
  categoryId: number;
  src: string;
  userId: number;
  likes: number;
}

interface PhotoRecord {
  photos: PhotoCard[];
}

export const ListOfPhotoCards = () => {
  const [photosB, setPhotosB] = useState<Array<any>>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch('https://api.jsonbin.io/v3/b/645d4b8c8e4aa6225e9b2d5c');
          const responseA = await response.json() as { record: PhotoRecord };
          const categoriesA = responseA.record.photos.map(photo => <li key={photo.id}> <PhotoCard id={photo.id} categoryId={photo.categoryId} userId={photo.userId} src={photo.src} likes={photo.likes} /> </li>);
          setPhotosB(categoriesA);
        }, 2000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <ul>
      {photosB}
    </ul>
  )
}

// export const ListOfPhotoCards = () => {
//   const [photosB, setPhotosB] = useState<Array<any>>([])

//   useEffect(function () {
//     fetch('https://api.jsonbin.io/v3/b/645d4b8c8e4aa6225e9b2d5c')
//       .then(response => response.json())
//       .then(response => {
//         const categoriesA = response.record.photos.map((photo:Photo) => <li key={photo.id}> <PhotoCard id={photo.id} categoryId={photo.categoryId} userId={photo.userId} src={photo.src} likes={photo.likes} /> </li>)
//         setPhotosB(categoriesA)
//       })
//       .catch(error => {
//         console.log('Error fetching data:', error)
//       })
//   }, [])
  // const { data, loading, error } = useQuery(ANIMALS_QUERY)
  // if (loading) return 'Loading...'
  // if (error) return <pre>{error.message}</pre>
//   return (
//     <ul>
//         {photosB.map(photo => (
//       <main key={photo.id}>
//         <PhotoCard {...photo} />
//       </main>
//     ))}
//     </ul>
//   )
// }

// export const ListOfPhotoCards = () => {
//   // const { data, loading, error } = useQuery(ANIMALS_QUERY)
//   // if (loading) return 'Loading...'
//   // if (error) return <pre>{error.message}</pre>
//   return (
//     <ul>
//       {db.photos.map((photo: Photo) => <li key={photo.id}> <PhotoCard {...photo} /> </li>)}
//     </ul>
//   )
// }
