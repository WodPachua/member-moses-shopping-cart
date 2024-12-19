import { GitHub } from '@mui/icons-material'

function Footer() {
  return (
    <footer className='flex justify-center items-center gap-2 p-2 text-white bg-[#B99095]'>
      Copyright © {new Date().getFullYear()} WodPachua
      <a href='https://github.com/wodpachua' target='_blank' rel='noreferrer' className='flex items-center'>
        <GitHub/>
      </a>
    </footer>
  )
}

export default Footer