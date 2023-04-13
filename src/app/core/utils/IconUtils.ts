export class IconUtils {
  public static changeIconOnClick(elementId: string, icon: string, secondIcon: string): void {
    if (document.getElementById(elementId)?.classList.contains(icon)) {
      document.getElementById(elementId)?.classList.remove(icon);
      document.getElementById(elementId)?.classList.add(secondIcon);
      return;
    }
    document.getElementById(elementId)?.classList.add(icon);
    document.getElementById(elementId)?.classList.remove(secondIcon);
  }
}
