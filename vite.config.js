import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				".js": "jsx",
			},
			define: {
				global: "window",
			},
		},
	},
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				exportType: "default",
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: "**/*.svg",
		}),
	],
	resolve: {
		alias: {
			assets: "/src/assets",
			components: "/src/components",
			features: "/src/features",
			hooks: "/src/hooks",
			layout: "/src/layout",
			styles: "/src/styles",
			utils: "/src/utils",
		},
	},
});
