import { Breadcumbs, Container, MainTitle, ImageCarousel, ImageCard, DetailsCard, Review, ImageWithDetails } from '@/components'
import { designDetails } from '@/utils/constant'

export default function Home() {
  const { details, images, reviews, suggestions } = designDetails;
  return (
    <div className="content">
      <Breadcumbs />
      <ImageCarousel />
      <Container>
        <div className="grid grid-cols-12 md:gap-10 my-5">
          <div className=" col-span-12 md:col-span-6 lg:col-span-8">
            <MainTitle title="Tampilan Rumah" />
            <div className="grid grid-cols-12 gap-3">
              {
                images.map(item => {
                  return (
                    <div className="col-span-6 lg:col-span-4">
                      <ImageCard
                        title={item.title}
                        desc={item.desc}
                        imagePath={item.imagePath}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-4 md:mt-0">
            <DetailsCard details={details} />
            <div className="my-5">
              <MainTitle title="Testimoni" />
              {
                reviews.map(item => {
                  return (
                    <Review
                      username={item.username}
                      star={item.star}
                      review={item.review}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-14 mb-10">
          <MainTitle title="Desain Lainnya oleh Studio SAe" className="mb-5" />
          <div className="grid grid-cols-12 gap-3">
            {
              suggestions.map(item => {
                return (
                  <div className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3">
                    <ImageWithDetails details={item} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </Container>
    </div>
  )
}