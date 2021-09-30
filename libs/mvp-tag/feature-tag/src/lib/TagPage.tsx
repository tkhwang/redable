import React from 'react';
import { usePaginationTags } from '@readable/mvp-tag/data-access-tag';
import { MvpTagIputTag } from '@readable/mvp-tag/input-tag';

export function TagPage() {
  const { paginationTags, loading, error } = usePaginationTags();

  const defaultTagImage = 'https://readable-2021-dev.s3.ap-northeast-2.amazonaws.com/tags/deault.jpg';

  return (
    <>
      <MvpTagIputTag />
      <div className="text-2xl">Reference: All tags</div>
      {paginationTags?.edges &&
        paginationTags.edges.length > 0 &&
        paginationTags.edges.map(edge => {
          const {
            id,
            tag,
            normalizedTag,
            imageUrl,
            description,
            followersCount,
            userBookmarksCount,
            isFollowingTag,
          } = edge.node;

          return (
            <div className="p-10">
              <div className="max-w-md rounded overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-500">
                <div className="flex">
                  <div className="px-20 pt-4 pb-2">{normalizedTag}</div>
                  {!isFollowingTag && (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded"
                      disabled={!isFollowingTag}
                    >
                      follow
                    </button>
                  )}
                </div>
                <img src={imageUrl || defaultTagImage} className="image" alt="tag" />
                <ul>
                  <li>userBookmarksCount: {userBookmarksCount}</li>
                  <li>followersCount: {followersCount}</li>
                </ul>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default TagPage;
