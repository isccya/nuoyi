import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue()]
    vitePlugins.push(createAutoImport())
	vitePlugins.push(createSetupExtend())
    vitePlugins.push(createSvgIcon(isBuild))
    vitePlugins.push(WindiCSS())
	isBuild && vitePlugins.push(...createCompression(viteEnv))
    return vitePlugins
}
