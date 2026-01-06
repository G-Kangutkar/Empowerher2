import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const images = [
    // 'https://the-shooting-star.com/wp-content/uploads/2025/02/denys-nevozhai-D68ADLeMh5Q-unsplash-scaled.jpg',
    // 'https://cdn.britannica.com/00/20300-050-D5817F8E/Mount-Fuji-Lake-Yamanakaka-Yamanashi-prefecture-Japan.jpg',
    // 'https://www.kuonitumlare.com/documents/2398179/2398441/Japan_banner.jpg/e728aa71-b4cd-40a0-f4ef-7faa63d001d9',
    {
        id: 1,
        url: 'https://the-shooting-star.com/wp-content/uploads/2025/02/denys-nevozhai-D68ADLeMh5Q-unsplash-scaled.jpg',
        title: 'Japan Street',
        discription: 'Beatutiful lantern through the quite street! '
    },
    {
        id: 2,
        url: 'https://cdn.britannica.com/00/20300-050-D5817F8E/Mount-Fuji-Lake-Yamanakaka-Yamanashi-prefecture-Japan.jpg',
        title: 'Mount Fuji',
        discription: 'View of Mount Fuji from Yamanakaka Yamanashi Lake'
    },
    {
        id: 3,
        url: 'https://www.kuonitumlare.com/documents/2398179/2398441/Japan_banner.jpg/e728aa71-b4cd-40a0-f4ef-7faa63d001d9',
        title: 'Himeji Castle',
        discription: 'View of Himeji castle from lake surrounded by sakura in spring season'
    }
];
function PictureSlide() {

    const [cureentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
    };

    const handleNext = () => {
        setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
    };


    return (
        <div>
            <div className="flex justify-center items-center">
                <Card className={'w-170'}>
                    <CardHeader>
                        <CardTitle>Image SlideShow</CardTitle>
                    </CardHeader>
                    <CardContent>


                        <Carousel>
                            <CarouselContent>
                                {images.map(img => (
                                    <CarouselItem key={img.id}>
                                        <div>
                                            <div>
                                                <img src={img.url} alt={img.title} />
                                            </div>
                                            <div className="mt-4">
                                                <h3 className="text-3xl text-rose-700 ">{img.title}</h3>
                                                <p>{img.discription}</p>

                                            </div>
                                            {/* <div>
                                    <Button onClick={handlePrevious} variant="outline">Previous</Button>
                                    <Button onClick={handleNext} variant="outline">Next</Button>
                                </div> */}
                                        </div>

                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

}
export default PictureSlide;