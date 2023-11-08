import { Button } from "@/components/ui/button";
import { CarouselRoot } from "./components/carousel/carousel-root";
import { AboutModel } from "./components/about-model";
import { FlexDiv } from "@/components/interface/flex-div";
import { incrementLike } from "@/utils/increment-like-to-model";
import { getDataById } from "@/utils/get-model-by-id";
import { ReturnToHomeButton } from "./components/return-to-home-button";
import { CarouselContentProps } from "@/types/model/carousel-content-props";
import { getServerSession } from "next-auth";
import { ModelDetails } from "./components/model-details";
import { Flags } from "@/types/model/models-filter-props";

export default async function Model({ params }: { params: { slug: string } }) {
  const dataModel = await getDataById(params.slug);
  console.log(dataModel);
  const session = await getServerSession();

  return (
    <main className="w-10/12 max-w-xl mx-auto m-auto flex flex-col items-center justify-center sm:py-4">
      <ReturnToHomeButton />
      <div className="w-full md:my-4 my-10">
        <CarouselRoot model={dataModel} />
        <FlexDiv col className="">
          {/* {dataModel.model.isPremium && (
            <Button>+</Button>
          )} */}
          <AboutModel.Description>
            {/* {dataModel.description} */}
          </AboutModel.Description>

          {session &&
            dataModel.featureFlags.map((flag: Flags) => {
              if (flag.name === "enable_create_button")
                return <ModelDetails.AddNewButton />;
            })}
          <a href={dataModel.telegramVip} target="_blank">
            <Button className="">telegram vip</Button>
          </a>
          <a href={dataModel.telegramFree} target="_blank">
            <Button>canal free</Button>
          </a>
        </FlexDiv>
      </div>
    </main>
  );
}
