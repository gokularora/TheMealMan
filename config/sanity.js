import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

const client = sanityClient({
	projectId: "q3dlo44m",
	dataset: "production",
	apiVersion: "2022-12-24", // use current UTC date - see "specifying API version"!
	token: "", // or leave blank for unauthenticated usage
	useCdn: false, // `false` if you want to ensure fresh data
});

function urlFor(source) {
	return imageBuilder(client).image(source)
}

export {client, urlFor};