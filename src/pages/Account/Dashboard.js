import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { BooksUrls } from "../../utils/Config";
import { useDataFetch } from "../../hooks/DataHook";
import { FeatureCard } from "./Components/feature-card";
import { TeamCard } from "./Components/team-card";
import { featuresData } from "../../data/features-data";
import { contactData } from "../../data/contact-data";
import PageTitle from "./Components/page-title";
import AutoTradingPoster from "../../Assets/VAST-FX-POSTER-AUTOTRADE-CORRETT.jpg";
import { baseUrl } from "../../utils/baseUrl";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function Dashboard() {
  const fetcher = useDataFetch();
  const [isLoading, setisLoading] = React.useState(false);
  const [UnSubscribedBooks, setUnSubscribedBooks] = React.useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      setisLoading(true);
      const response = await fetcher.fetch({ url: BooksUrls.allBooks });
      //  console.log(response);
      if (response) {
        setUnSubscribedBooks(response.data);
        setisLoading(false);
      }
    };
    loadData();
  }, []);
  console.log(UnSubscribedBooks);
  return (
    <>
      <div className="relative h-full w-full flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl  relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Learn to trade, trade to earn.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Welcome to vast<span style={{ color: "red" }}>Fx</span> where
                knowledge is power and profits are within reach! Our carefully
                curated selection of Forex books will help you unlock the
                secrets of successful trading.Happy reading, and happy trading!
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Our mission is to educate and empower traders of all levels,
                from beginners to experienced professionals, with the latest
                tools, insights, and strategies for successful forex trading.
                <br />
                <br />
                Whether you're interested in learning the basics of forex
                trading, exploring advanced trading techniques, or staying
                up-to-date with the latest market news and trends, our website
                has something for everyone.
              </Typography>
              {/* <Button variant="outlined">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src={AutoTradingPoster}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Autotrading Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Looking for a hassle-free way to trade Forex? Look no
                    further than our autotrading service. With our autotrading
                    service, you can enjoy the benefits of Forex trading without
                    the stress and time commitment. Join now and start making
                    profitable trades without lifting a finger!
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className=" mx-auto">
          <PageTitle heading="Popular books">
            Forex Bestsellers:Discover the Forex books that traders can't stop
            talking about
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {UnSubscribedBooks?.slice(0, 4).map((data) => (
              <TeamCard
                key={data.id}
                img={baseUrl + data.image}
                name={data.title}
                // position={position}
                // socials={
                //   <div className="flex items-center gap-2">
                //     {socials.map(({ color, name }) => (
                //       <IconButton key={name} color={color} variant="text">
                //         <i className={`fa-brands text-lg fa-${name}`} />
                //       </IconButton>
                //     ))}
                //   </div>
                // }
              />
            ))}
            <div className="px-6">
              <a href="/account/books">
                <Button className=" flex gap-1 flex-end" variant="outlined">
                  All books
                  {React.createElement(ArrowRightIcon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1 ",
                  })}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className=" mx-auto">
          <PageTitle heading="Trade with us">
            Our expert team provides 24/7 support, educational resources, market
            analysis, and trading signals to help you succeed. Join VastFx today
            and experience the benefits of trading with us.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to Trade with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
