import React from 'react'
import { Img, ImgWrapper, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

interface PhotoCardProps {
  id: number;
  categoryId: number;
  src: string;
  userId: number;
  likes: number;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ id, likes = 0, src }) => {
  const [show, el] = useNearScreen()
  const key = `like-${id}`
  // el valor por defecto de la key en este custom hoook es false
  const [liked, setLiked] = useLocalStorage(key, false)

  // Este use efect es un modo de quitar cada item del Storage de un modo mas casero
  // useEffect(() => {
  //   if (!liked) {
  //     window.localStorage.removeItem(key)
  //   }
  // }, [liked, key])

  // Hay que instalar npm install intersection-observer, como window.IntersectionObserver no es soportado por todos los exploradores se instala la dependecia polyfill pero se inporta dentro del efecto para que solo la solicite una vez, se agrega al archivo json tambien
  // Al ser un polyfill parchea al objeto window y no hace falta devolver una respuesta al .then, cuando se resuelva la promesa se carga la dependencia
  // Se hace una condicion para que solo lo use si el navegador no lo tiene por defecto

  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Article ref={el}>
      {show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img width='100%' src={src} alt='PhotoCard' />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' />{likes} likes!
          </Button>
        </>}
    </Article>
  )
}
