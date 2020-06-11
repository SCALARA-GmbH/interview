import axios from 'axios';

describe('Integration', function () {
  it('Posts a blog entry', async () => {
    const addPostResponse = await axios({
      url: 'http://localhost:5000/posts/new',
      method: 'post',
      data: {
        title: 'Integration Test',
        content: 'is a good way to find subtle bugs',
      },
    });

    expect(addPostResponse.data).toEqual({ message: 'New Post Created' });

    const getBlogPosts = await axios({
      url: 'http://localhost:5000/posts',
      method: 'get',
    });

    expect(getBlogPosts.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Integration Test',
          content: 'is a good way to find subtle bugs',
        }),
        expect.objectContaining({
          title: 'this is vanilla mysql',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }),
        expect.objectContaining({
          title: 'without using a framework',
          content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        }),
        expect.objectContaining({
          title: 'Lorem Ipsum',
          content: 'and it works',
        }),
      ])
    );
  });
});
