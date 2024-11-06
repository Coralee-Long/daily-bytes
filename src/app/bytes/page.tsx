import GlowCard from '@/components/GlowCard';

const Bytes: React.FC = () => {
  return (
    <div className="p-8 w-100 mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-light-900">
        Bytes
      </h1>
      <p className="text-lg mb-4 text-center text-indigo-light-800">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quas
        nemo, eaque tempore cum commodi, recusandae adipisci ullam hic beatae
        consequatur assumenda voluptate explicabo suscipit quo id similique
        consequuntur tempora?
      </p>

      {/* Example of a grid layout for projects */}

      <div className="p-8 mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <GlowCard
          title="Project One"
          description="A brief description of Project One."
          imagePublicId="florian-olivo-4hbJ-eymZ1o-unsplash_slcrri"
          color="indigo"
        />
        <GlowCard
          title="Project Two"
          description="A brief description of Project Two."
          imagePublicId="luca-bravo-XJXWbfSo2f0-unsplash_bvdnce"
          color="indigo"
        />
        <GlowCard
          title="Project Three"
          description="A brief description of Project Three."
          imagePublicId="growtika-58K6WZiwd0g-unsplash_x0x9ya"
          color="indigo"
        />
        <GlowCard
          title="Project Four"
          description="A brief description of Project Four."
          imagePublicId="lewis-kang-ethe-ngugi-f5pTwLHCsAg-unsplash_gyuk0l"
          color="indigo"
        />
      </div>
    </div>
  );
};

export default Bytes;
