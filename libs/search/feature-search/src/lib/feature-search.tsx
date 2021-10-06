import { MainHeader, MainLayout } from '@readable/ui';
import { SearchFeed } from './search-feed';

export function FeatureSearch() {
  return (
    <MainLayout
      renderHeader={() => <MainHeader renderProfile={() => <div>profile</div>} />}
      renderSection={() => <SearchFeed />}
    />
  );
}

export default FeatureSearch;
