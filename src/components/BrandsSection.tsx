import Image from "next/image"
import { Star } from "lucide-react"

export default function BrandsSection() {
  const brands = [
    ["/images/brand1.svg", "/images/brand2.svg", "/images/brand3.svg", "/images/brand4.svg", "/images/brand5.svg"],
    ["/images/brand6.svg", "/images/brand7.svg", "/images/brand8.svg", "/images/brand9.svg"],
    ["/images/brand10.svg", "/images/brand11.svg", "/images/brand12.svg"],
  ]

  return (
    <section className="py-16 px-0 bg-[#F2FBFD] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#36E1F8] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#C0BFC6] opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-0">
        {/* Left side image */}
        <div className="flex items-center right-1 justify-start w-full h-full">
          <Image
            src="/images/image17.svg"
            alt="Decorative Image"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Center - logos */}
        <div className="col-span-2 text-center flex flex-col items-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <Star className="w-4 h-4 text-[#009FB2] fill-current" />
            <span className="text-sm font-medium text-[#27272B] tracking-wider">WE WORK WITH</span>
          </div>

          {/* Logos grid */}
          <div className="space-y-8">
            {brands.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex items-center justify-center gap-6 md:gap-10 lg:gap-12 flex-wrap"
              >
                {row.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="flex items-center justify-center min-w-[90px] h-12 px-2"
                  >
                    <Image
                      src={logo}
                      alt={`Brand ${logoIndex + 1}`}
                      width={90}
                      height={40}
                      className="object-contain grayscale hover:grayscale-0 transition"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
