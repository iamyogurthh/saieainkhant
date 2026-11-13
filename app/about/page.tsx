import Image from 'next/image';

const technologies = [
  { name: 'JavaScript', file: 'JavaScript.svg', width: 30, height: 30 },
  { name: 'Node.js', file: 'NodeJs.svg', width: 27, height: 30 },
  { name: 'TypeScript', file: 'TypeScript.svg', width: 30, height: 30 },
  { name: 'Tailwind CSS', file: 'Tailwind.svg', width: 51, height: 30 },
  { name: 'React', file: 'React.svg', width: 34, height: 30 },
  { name: 'Next.js', file: 'NextJs.svg', width: 97, height: 20 },
  { name: 'C#', file: 'CSharp.svg', width: 27, height: 30 },
  { name: '.NET', file: 'NET.svg', width: 30, height: 30 },
  { name: 'Docker', file: 'Docker.svg', width: 43, height: 30 },
  { name: 'MySQL', file: 'MySQL.svg', width: 31, height: 30 },
  { name: 'SQLite', file: 'SQLite.svg', width: 27, height: 30 },
  { name: 'Laravel', file: 'Laravel.svg', width: 29, height: 30 },
  { name: 'Python', file: 'Python.svg', width: 30, height: 30 },
  { name: 'FastAPI', file: 'FastAPI.svg', width: 30, height: 30 },
  { name: 'MongoDB', file: 'MongoDB.svg', width: 14, height: 30 },
];

export default function AboutPage() {
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

        xl:justify-center
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
            ABOUT ME
          </h1>
        </div>

        {/* About Content */}
        <div className="px-2 lg:px-0">
          <div className="text-[40px] lg:text-[80px] font-black font-ibm-sans-bold ">
            <h1>SAI EAIN</h1>
            <h1>KHANT</h1>
          </div>
          <div className="font-mono">
            <p>BUILDING HIGH-PERFORMANCE SYSTEMS /</p>
            <p>FULL-STACK ENGINEERING / PRECISION CODE</p>
          </div>
          <div className="font-sans mt-6">
            Full Stack Software Developer passionate about creating clean,
            <br className="hidden lg:block" />
            responsive, and meaningful applications.
          </div>
          <div className="font-sans mt-6">
            Skilled in turning ideas into practical digital solutions, solving
            <br className="hidden lg:block" />
            problems, and continuously exploring new technologies to build{' '}
            <br className="hidden lg:block" />
            better user experiences.
          </div>
          <ul
            aria-label="Technology stack"
            className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8 max-w-130"
          >
            {technologies.map((technology) => (
              <li
                key={technology.file}
                className="flex h-10 items-center justify-center"
              >
                <Image
                  src={`/techStacks/${technology.file}`}
                  alt={technology.name}
                  width={technology.width}
                  height={technology.height}
                  className="max-h-8 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* ================================================================= */}
    </section>
  );
}
