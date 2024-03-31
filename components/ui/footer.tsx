import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className="bg-accent ">
      <div className="px-8 mt-32 flex justify-between items-center py-4 max-w-[1250px] w-full  m-auto">
        <span className="text-[0.625rem]">
          © 2023 Copyright <span className="font-semibold">FSW Store</span>
        </span>
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/mateusgustavodev/">
            <FaLinkedin size={22} />
          </Link>
          <Link href="https://github.com/MateusGustavo22">
            <FaGithub size={22} />
          </Link>
        </div>
      </div>
    </div>
  )
}
