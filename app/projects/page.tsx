import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage() {
  const projectElements = [
    {
      title: 'Shwe Hostel',
      description:
        'Hostel Management System with its own licensing infrastructure.',
      img: '/projects/shwehostel.png',
      tech: 'C# // WPS .NET // SQLite',
    },
    {
      title: 'Kwisi POS',
      description: 'Full stack POS application for all devices.',
      img: '/projects/kwisipos.png',
      tech: 'Next.js // Postgres // Radis // Typescript // Tailwind CSS',
      link: 'https://kwisi-pos-app.vercel.app/',
    },
    {
      title: 'Wujugar Hamster Shop Website',
      description: 'Ecommerce website connecting with Kwisi POS',
      img: '/projects/wujugar.png',
      tech: 'Next.js // Postgres // Typescript // Tailwind CSS',
      link: 'https://wujugar.vercel.app/',
    },
    {
      title: 'Maharbote Calculator',
      description:
        'Maharbote calculator website for both english and burmese dates.',
      img: '/projects/maharbote.png',
      tech: 'Next.js // Typescript // Tailwind CSS',
      link: 'https://maharbotecalculator.vercel.app/',
    },
  ];

  return (
    <section
      className="
        flex 
        flex-col 
        min-h-screen
        items-center 
        justify-start
        mt-16
        overflow-auto

        lg:flex-row  
        lg:items-start  
        lg:justify-end
        lg:p-15
        lg:mt-0
      "
    >
      {/* ===================== Decorations ================================= */}
      <Image
        src={'/assets/big-symbol.svg'}
        alt="big-symbol"
        width={362}
        height={681}
        className="fixed bottom-0 right-0 opacity-5 -z-10"
      />
      <span className="font-blackops text-[350px] fixed opacity-5 -bottom-30 left-45 -z-10 hidden lg:flex ">
        9
      </span>
      {/* ================================================================= */}

      {/* ===================== Main Contents ============================== */}
      <div className="flex flex-row items-start">
        {/* Vertical About Me Title */}
        <div className="relative hidden lg:block w-30 h-150 shrink-0 overflow-hidden opacity-5">
          <h1
            className="
            absolute
            left-1/2
            top-53
            w-90
            -translate-x-1/2
            -translate-y-1/2
            rotate-90
            font-blackops
            text-[90px]
            tracking-[4px]
            whitespace-nowrap
          "
          >
            PROJECT
          </h1>
        </div>

        {/* About Content */}
        <div className="p-10 lg:px-0">
          <div className="flex items-center justify-between ">
            <p className="font-mono tracking-[4px] text-[8px] font-bold">
              02 // PROJECTS
            </p>
            <p className="font-mono tracking-[4px] text-[8px] ">
              TOTAL RECORDS - {projectElements.length}
            </p>
          </div>
          <div className="mt-6">
            {projectElements.map((project, index) => {
              return (
                <div key={index} className="mb-8">
                  <div className="font-light text-gray text-[11px] tracking-[4px] mb-2 max-w-90">
                    {project.tech}
                  </div>
                  <div className="flex flex-col xl:flex-row gap-4 ">
                    <Image
                      src={project.img}
                      width={357}
                      height={202}
                      alt="project image"
                    />
                    <div className="">
                      <div>
                        <h1 className="font-bold tracking-[4px]">
                          {project.title}
                        </h1>
                        <p className="tracking-[4px] max-w-120">
                          {project.description}
                        </p>
                      </div>
                      {project.link ? (
                        <div className="mt-4">
                          <Link
                            href={project.link}
                            className="bg-secondary text-primary p-2"
                          >
                            View Demo
                          </Link>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* ================================================================= */}
    </section>
  );
}
