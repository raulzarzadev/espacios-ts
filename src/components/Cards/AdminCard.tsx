import Image from 'next/image'

export default function AdminCard({
  label = 'label',
  bgImage = 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
}) {
  return (
    <div className="group relative min-h-[8rem] min-w-[8rem] rounded-lg shadow-xl ">
      
      <Image
        src={bgImage}
        layout="fill"
        objectFit="cover"
        alt="admin-area"
        className=" opacity-60 rounded-lg "
      />
      <span className="absolute top-[calc(50%-12px)] left-0 right-0 text-center text-lg font-semibold hover:">
        {label}
      </span>
    </div>
  )
}
