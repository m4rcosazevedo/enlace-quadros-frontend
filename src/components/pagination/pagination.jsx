import ReactPagination from 'react-js-pagination'
import { useRouter } from 'next/router'

const config = {
  pageRangeDisplayed: 3,

  hideDisabled: true,
  hideFirstLastPages: false,
  hideNavigation: false,

  prevPageText: '‹',
  firstPageText: '«',
  nextPageText: '›',
  lastPageText: '»',

  linkClassFirst: 'arrow first',
  linkClassPrev: 'arrow prev',
  linkClassNext: 'arrow next',
  linkClassLast: 'arrow last',

  itemClass: 'page-item',
  linkClass: 'page-link',
  innerClass: 'pagination justify-content-center',
  activeLinkClass: '',
}


export const Pagination = ({ meta, url }) => {
  const router = useRouter()
  const {
    current_page: currentPage,
    from,
    last_page: lastPage,
    per_page: perPage,
    to,
    total
  } = meta

  const handleChange = (page) => {
    router.push(`${url}?page=${page}`)
  }

  return (
    <ReactPagination
      { ...config }
      activePage={currentPage}
      itemsCountPerPage={perPage}
      totalItemsCount={total}
      onChange={handleChange}
    />
  )

}
