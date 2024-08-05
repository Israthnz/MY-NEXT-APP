import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About Us'} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4 text-justify">
          <p>
            Voluptate nulla Lorem aliqua pariatur commodo ea. Nostrud tempor tempor id adipisicing reprehenderit non eu consectetur sint sunt reprehenderit elit anim. Et duis esse enim duis aliqua. Aliqua id cillum ipsum sunt aute labore enim laboris sint enim ut exercitation. Do velit sit elit anim nulla magna sunt.
          </p>
          <p>
            Ipsum cillum nulla non et aliqua ad sint ea laborum culpa. Nisi dolore consequat culpa laboris et culpa non. Sit aliquip deserunt consectetur duis.Quis et eu nulla commodo nostrud cillum enim nulla sunt ut commodo consequat veniam. Et voluptate fugiat id ex id eu magna qui proident proident aliqua ullamco aliqua ullamco. Incididunt dolore fugiat excepteur labore pariatur dolor ullamco exercitation.
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact Us'}
        />
        <div className="mt-6">
          <a className="text-4xl text-gray-400 italic" href="tel:+94779816660">
            +94 779 816 660
          </a>
        </div>
      </section>
    </>
  );
}
