import rulebookCover from '@/assets/images/rulebook-cover.jpg';
const RuleBook = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <img
          alt=""
          src={rulebookCover}
          className="absolute inset-0 -z-10 size-full object-cover"
          style={{ filter: 'blur(5px) brightness(50%)' }}
        />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl ">
            2024 RULEBOOK
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            Explore the official 2024 NFL rulebook.
          </p>
        </div>
      </div>

      {/* Rulebook content */}
      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8 text-white">
        <aside className="sticky top-8 hidden w-3/12 shrink-0 lg:block text-sm">
          <ul>
            <li>Preface</li>
            <li>Plan of Playing Field</li>
            <li>Field Markings</li>
            <li>Bench Area</li>
            <li>Order of the Rules</li>
            <li>Penalty Summary</li>
            <li>Table of Foul Codes</li>
            <li>Team Abbreviation Codes</li>
            <li>Official Signals</li>
          </ul>
        </aside>

        <article className="flex-1">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl ">
            Preface
          </h2>
          <p className="mt-8 ">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <p className="mt-8 text-sm">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl mt-8">
            Plan of Playing Field
          </h2>
          <p className="mt-8 text-sm">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl mt-8">
            Field Markings
          </h2>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p>
        </article>

        <aside className="sticky top-8 hidden w-44 shrink-0 xl:block">
          <div>2024</div>
          <div>2023</div>
          <div>2022</div>
        </aside>
      </div>
    </>
  );
};

export default RuleBook;
