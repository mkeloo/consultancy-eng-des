import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ServicesTabs() {
  return (
    <Tabs defaultValue="design" className="w-full">
      <TabsList className="grid grid-cols-4 gap-2 mb-6">
        <TabsTrigger value="design">Design</TabsTrigger>
        <TabsTrigger value="construction">Construction</TabsTrigger>
        <TabsTrigger value="consultation">Consultation</TabsTrigger>
        <TabsTrigger value="miscellaneous">Miscellaneous</TabsTrigger>
      </TabsList>

      <TabsContent value="design">
        <Card className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-1/2 p-6 ">
            <CardHeader>
              <CardTitle>Innovative Design Solutions</CardTitle>
              <CardDescription>
                Cutting-edge designs for residential, commercial, and industrial
                spaces, tailored to your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 ">
              <p className="text-lg">
                Our design team offers innovative solutions that blend
                aesthetics with functionality. We understand the importance of
                creating spaces that are not only beautiful but also practical
                and efficient.
              </p>
              <p className="text-lg">
                From initial concept to final execution, our designers work
                closely with clients to ensure their vision is realized. Whether
                it’s a residential, commercial, or industrial project, we tailor
                our services to meet the unique needs of each client.
              </p>
            </CardContent>
          </div>
          <div className="w-1/2 p-6">
            <div className="relative w-full aspect-square">
              <img
                src="/images/Services/design.jpg"
                className="object-cover w-full h-full rounded-3xl shadow-lg border-4 border-yellow-500 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:shadow-yellow-500 hover:backdrop:blur-2xl"
                alt="design"
              />
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="construction">
        <Card className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-1/2 p-6">
            <div className="relative w-full aspect-square">
              <img
                src="/images/Services/construction.jpg"
                className="object-cover w-full h-full rounded-3xl shadow-lg border-4 border-yellow-500 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:shadow-yellow-500 hover:backdrop:blur-2xl"
                alt="design"
              />
            </div>
          </div>
          <div className="w-1/2 p-6">
            <CardHeader>
              <CardTitle>Quality Construction Services</CardTitle>
              <CardDescription>
                Excellence in construction, ensuring quality and durability for
                all project types.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">
                Our construction services are built on a foundation of quality
                and reliability. We pride ourselves on delivering projects that
                stand the test of time, using the best materials and
                construction practices.
              </p>
              <p className="text-lg">
                We handle all types of construction projects, from residential
                homes to large-scale commercial buildings. Our team is dedicated
                to ensuring that each project is completed on time and within
                budget, with a commitment to excellence in every detail.
              </p>
            </CardContent>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="consultation">
        <Card className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-6">
            <CardHeader>
              <CardTitle>Professional Consultation</CardTitle>
              <CardDescription>
                Expert guidance through every phase of your construction
                project.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">
                Our consultation services provide you with the expert guidance
                you need to navigate the complexities of construction projects.
                We offer strategic advice and practical solutions to help you
                achieve your goals.
              </p>
              <p className="text-lg">
                From planning and design to execution and completion, our
                consultants are with you every step of the way. We ensure that
                your project is not only successful but also smooth and
                stress-free.
              </p>
            </CardContent>
          </div>
          <div className="w-1/2 p-6">
            <div className="relative w-full aspect-square">
              <img
                src="/images/Services/consultant.jpg"
                className="object-cover w-full h-full rounded-3xl shadow-lg border-4 border-yellow-500 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:shadow-yellow-500 hover:backdrop:blur-2xl"
                alt="design"
              />
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="miscellaneous">
        <Card className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-1/2 p-6">
            <div className="relative w-full aspect-square">
              <img
                src="/images/Services/miscellaneous.jpg"
                className="object-cover w-full h-full rounded-3xl shadow-lg border-4 border-yellow-500 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:shadow-yellow-500 hover:backdrop:blur-2xl"
                alt="design"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <CardHeader>
              <CardTitle>Custom Construction Solutions</CardTitle>
              <CardDescription>
                Tailored solutions for unique construction needs, providing
                custom approaches to challenging projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">
                Our miscellaneous services cover a wide range of custom
                construction solutions. Whether you have a unique project or
                special requirements, we have the expertise to deliver results
                that exceed your expectations.
              </p>
              <p className="text-lg">
                We take on challenging projects that require innovative thinking
                and bespoke solutions. Our team is committed to providing the
                highest level of service and quality, no matter how complex the
                project.
              </p>
            </CardContent>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
