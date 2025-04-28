import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "./providers/AppProvider";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "600", "700", "800"],
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: {
		default: "ChatWithMe - AI-Powered Chat Assistant",
		template: "%s | ChatWithMe",
	},
	description:
		"Experience next-gen AI conversations with ChatGPT 4o. Get instant answers, creative ideas, and smart assistance for all your needs.",
	keywords: [
		"AI Chat",
		"ChatGPT",
		"AI Assistant",
		"Chat Bot",
		"AI Conversations",
		"Smart Chat",
	],
	authors: [{ name: "Prem pachabhaiya", url: "https://yourwebsite.com" }],
	creator: "Prem pachabhaiya",
	publisher: "TweenLab",
	metadataBase: new URL("https://yourwebsite.com"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "ChatWithMe - AI-Powered Chat Assistant",
		description: "Experience next-gen AI conversations with ChatGPT 4o",
		url: "https://yourwebsite.com",
		siteName: "ChatWithMe",
		images: [
			{
				url: "https://yourwebsite.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "ChatWithMe AI Assistant",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "ChatWithMe - AI-Powered Chat Assistant",
		description: "Experience next-gen AI conversations with ChatGPT 4o",
		images: ["https://yourwebsite.com/twitter-image.jpg"],
		creator: "@yourtwitterhandle",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<meta name="theme-color" content="#0a0a14" />
			</head>
			<body className={`${inter.variable} ${inter.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
