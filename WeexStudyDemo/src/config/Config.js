export const statusHeight = 32
export const navgationBarHeight = 100


export function getRealScreenHeight(Utils) {
  if(WXEnvironment.platform === 'Web') {
      return Utils.env.getScreenHeight()
  }
  return Utils.env.getScreenHeight() - statusHeight
}