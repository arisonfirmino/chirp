import HighlightsFeed from "./highlights-feed/highlights-feed";
import MainView from "./main-view";
import LateralMenu from "./menu/lateral-menu";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-blue-700 md:flex-row">
      <LateralMenu />
      <HighlightsFeed />
      <MainView>{children}</MainView>
    </main>
  );
};

export default Container;
