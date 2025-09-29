import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);

  const toggleMobileMenu = (name: string) => {
    setOpenMobileMenu(openMobileMenu === name ? null : name);
  };

  const toggleMobileSubMenu = (name: string) => {
    setOpenMobileSubMenu(openMobileSubMenu === name ? null : name);
  };

  return (
    <nav className="fixed top-0 py-4 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-primary font-bold text-primary">
          <img src="/img/logo.png" alt="Logo" className="w-36" />
        </div>

        <ul className="hidden md:flex space-x-8 font-primary font-bold">
          <li>
            <a href="#home" className="hover:text-primary">
              Home
            </a>
          </li>

          <li className="relative group">
            <a href="#about" className="hover:text-primary flex items-center">
              Tentang Kami
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-out delay-100">
              <li>
                <a href="#pengalaman" className="block px-4 py-2 hover:bg-gray-100">
                  Pengalaman Kami
                </a>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <span className="hover:text-primary flex items-center cursor-pointer">
              Layanan
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-out delay-100">
              <li className="relative group/sub">
                <a
                  href="#kebijakan"
                  className="flex justify-between items-center px-4 py-2 hover:bg-gray-100"
                >
                  Konsultasi Kebijakan Publik
                  <IoIosArrowDroprightCircle className="ml-2" />
                </a>

                <ul className="absolute top-0 left-full mt-0 bg-white shadow-lg rounded-md py-2 w-56 
                  opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible 
                  transition-opacity duration-300 ease-out delay-100">
                  <li>
                    <a href="#kebijakan1" className="block px-4 py-2 hover:bg-gray-100">
                      Survey Kepuasan Masyarakat
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Survey Status Kesehatan
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      TGM / IPLM
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      PDRB
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      RUPM
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Peta Potensi / PUD / IPRO
                    </a>
                  </li><li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Pengukuran Standar Pelayanan Minimal
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      PDRB Kecamatan
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      SROI/ Analisa Dampak Sosial
                    </a>
                  </li>
                </ul>
              </li>

              <li className="relative group/sub">
                <a href="#politik" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                  Konsultasi Politik
                  <IoIosArrowDroprightCircle className="ml-2" />
                </a>

                <ul className="absolute top-0 left-full mt-0 bg-white shadow-lg rounded-md py-2 w-56 
                  opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible 
                  transition-opacity duration-300 ease-out delay-100">
                  <li>
                    <a href="#kebijakan1" className="block px-4 py-2 hover:bg-gray-100">
                      TeleSurvey
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Politik Pintar
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Survey Politik
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Pendampingan Politik
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Monitoring Media Sosial
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Sekolah Politik
                    </a>
                  </li><li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Branding Politik
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Analisa Dapil
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Podcast Sotooy
                    </a>
                  </li>
                </ul>
              </li>

              <li className="relative group/sub">
                <a href="#sains" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                  Penelitian & Sains Data
                  <IoIosArrowDroprightCircle className="ml-2" />
                </a>

                <ul className="absolute top-0 left-full mt-0 bg-white shadow-lg rounded-md py-2 w-56 
                  opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible 
                  transition-opacity duration-300 ease-out delay-100">
                  <li>
                    <a href="#kebijakan1" className="block px-4 py-2 hover:bg-gray-100">
                      Pelatihan Data
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Manajemen Verifikasi Data
                    </a>
                  </li>
                </ul>
              </li>

              <li className="relative group/sub">
                <a href="#manajemen" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                  Manajemen Bisnis
                  <IoIosArrowDroprightCircle className="ml-2" />
                </a>

                <ul className="absolute top-0 left-full mt-0 bg-white shadow-lg rounded-md py-2 w-56 
                  opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible 
                  transition-opacity duration-300 ease-out delay-100">
                  <li>
                    <a href="#kebijakan1" className="block px-4 py-2 hover:bg-gray-100">
                      Studi Kelayakan
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Rencana Bisnis & Pembangunan
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Analisis Penelitian Pasar & Strategi Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#kebijakan2" className="block px-4 py-2 hover:bg-gray-100">
                      Tata Kelola Organisasi
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <a href="#pengetahuan" className="hover:text-primary flex items-center">
              Pengetahuan
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-out delay-100">
              <li>
                <a href="#berita" className="block px-4 py-2 hover:bg-gray-100">
                  Berita
                </a>
              </li>
              <li>
                <a href="#penelitian" className="block px-4 py-2 hover:bg-gray-100">
                  Penelitian
                </a>
              </li>
              <li>
                <a href="#konten" className="block px-4 py-2 hover:bg-gray-100">
                  Konten
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="hidden md:block">
          <a
            href="#profil"
            className="bg-orange-500 text-white font-primary font-bold px-5 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Profil Perusahaan
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4 font-primary font-bold">
            <li><a href="#home" className="hover:text-primary">Home</a></li>

            <li>
              <button onClick={() => toggleMobileMenu('about')} className="flex justify-between w-full hover:text-primary">
                Tentang Kami
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileMenu === 'about' && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li><a href="#pengalaman" className="block py-1 hover:text-primary">Pengalaman Kami</a></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleMobileMenu('services')} className="flex justify-between w-full hover:text-primary">
                Layanan
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileMenu === 'services' && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <button
                      onClick={() => toggleMobileSubMenu('kebijakan')}
                      className="flex justify-between w-full hover:text-primary"
                    >
                      Konsultasi Kebijakan Publik <IoIosArrowDroprightCircle />
                    </button>
                    {openMobileSubMenu === 'kebijakan' && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li><a href="#kebijakan1" className="block py-1 hover:text-primary">Survey Kepuasan Masyarakat</a></li>
                        <li><a href="#kebijakan2" className="block py-1 hover:text-primary">Survey Status Kesehatan</a></li>
                        <li><a href="#kebijakan3" className="block py-1 hover:text-primary">TGM / IPLM</a></li>
                        <li><a href="#kebijakan4" className="block py-1 hover:text-primary">PDRB</a></li>
                        <li><a href="#kebijakan5" className="block py-1 hover:text-primary">RUPM</a></li>
                        <li><a href="#kebijakan6" className="block py-1 hover:text-primary">Peta Potensi / PUD / IPRO</a></li>
                        <li><a href="#kebijakan7" className="block py-1 hover:text-primary">Pengukuran Standar Pelayanan Minimal</a></li>
                        <li><a href="#kebijakan8" className="block py-1 hover:text-primary">PDRB Kecamatan</a></li>
                        <li><a href="#kebijakan9" className="block py-1 hover:text-primary">SROI / Analisa Dampak Sosial</a></li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <button
                      onClick={() => toggleMobileSubMenu('politik')}
                      className="flex justify-between w-full hover:text-primary"
                    >
                      Konsultasi Politik <IoIosArrowDroprightCircle />
                    </button>
                    {openMobileSubMenu === 'politik' && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li><a href="#politik1" className="block py-1 hover:text-primary">TeleSurvey</a></li>
                        <li><a href="#politik2" className="block py-1 hover:text-primary">Politik Pintar</a></li>
                        <li><a href="#politik3" className="block py-1 hover:text-primary">Survey Politik</a></li>
                        <li><a href="#politik4" className="block py-1 hover:text-primary">Pendampingan Politik</a></li>
                        <li><a href="#politik5" className="block py-1 hover:text-primary">Monitoring Media Sosial</a></li>
                        <li><a href="#politik6" className="block py-1 hover:text-primary">Sekolah Politik</a></li>
                        <li><a href="#politik7" className="block py-1 hover:text-primary">Branding Politik</a></li>
                        <li><a href="#politik8" className="block py-1 hover:text-primary">Analisa Dapil</a></li>
                        <li><a href="#politik9" className="block py-1 hover:text-primary">Podcast Sotooy</a></li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <button
                      onClick={() => toggleMobileSubMenu('sains')}
                      className="flex justify-between w-full hover:text-primary"
                    >
                      Penelitian &amp; Sains Data <IoIosArrowDroprightCircle />
                    </button>
                    {openMobileSubMenu === 'sains' && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li><a href="#sains1" className="block py-1 hover:text-primary">Pelatihan Data</a></li>
                        <li><a href="#sains2" className="block py-1 hover:text-primary">Manajemen Verifikasi Data</a></li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <button
                      onClick={() => toggleMobileSubMenu('manajemen')}
                      className="flex justify-between w-full hover:text-primary"
                    >
                      Manajemen Bisnis <IoIosArrowDroprightCircle />
                    </button>
                    {openMobileSubMenu === 'manajemen' && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li><a href="#manajemen1" className="block py-1 hover:text-primary">Studi Kelayakan</a></li>
                        <li><a href="#manajemen2" className="block py-1 hover:text-primary">Rencana Bisnis &amp; Pembangunan</a></li>
                        <li><a href="#manajemen3" className="block py-1 hover:text-primary">Analisis Penelitian Pasar &amp; Strategi Marketing</a></li>
                        <li><a href="#manajemen4" className="block py-1 hover:text-primary">Tata Kelola Organisasi</a></li>
                      </ul>
                    )}
                  </li>

                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleMobileMenu('pengetahuan')} className="flex justify-between w-full hover:text-primary">
                Pengetahuan
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileMenu === 'pengetahuan' && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li><a href="#berita" className="block py-1 hover:text-primary">Berita</a></li>
                  <li><a href="#penelitian" className="block py-1 hover:text-primary">Penelitian</a></li>
                  <li><a href="#konten" className="block py-1 hover:text-primary">Konten</a></li>
                </ul>
              )}
            </li>

            <li><a href="#profil" className="hover:text-primary">Profil Perusahaan</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
