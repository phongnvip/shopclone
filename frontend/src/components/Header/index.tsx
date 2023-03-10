import { HiOutlineMapPin, HiOutlineShoppingCart } from 'react-icons/hi2';
import { FaShippingFast } from 'react-icons/fa'
import { BsPatchCheck } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'
import { TbListSearch } from 'react-icons/tb'
import { AiOutlineUser } from 'react-icons/ai'
import { VscListSelection } from 'react-icons/vsc'
import { FiChevronDown } from 'react-icons/fi'
import { DATA_LIST } from './constHeader';
import './index.styles.scss'

const Header = () => {

  const DATA = [
    {
      icon: <HiOutlineMapPin />,
      label: 'Địa chỉ tại Hà Nội'
    },
    {
      icon: <FaShippingFast />,
      label: 'Theo dõi đơn hàng'
    },
    {
      icon: <BsPatchCheck />,
      label: 'Tất cả ưu đãi'
    },
  ]
  return (
    <div style={{ backgroundColor: '#fff', height: 201, justifyContent: "center", display: "flex" }}>
      <div style={{ width: 1440, backgroundColor: '#fff', height: 201, display: "flex", justifyContent: "center" }}>
        <div style={{ width: 1201 }}>
          <div style={{ height: 42, display: 'flex', justifyContent: 'space-between', color: '#7a7878' }}>
            <div>
              Chào mừng tới cửa hàng SANji
            </div>
            <div style={{ display: "flex", listStyle: 'none' }}>
              {DATA.map((x, id) => (
                <li key={id} style={{ paddingLeft: '30px', display: 'flex' }}>
                  <p style={{ color: '#62addf', paddingRight: '5px' }}>{x.icon}</p>
                  <p>{x.label}</p>
                </li>
              ))}
            </div>
          </div>
          <div style={{ height: 90, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#62addf', display: 'flex', width: 241, alignItems: 'flex-end' }}>
                <span style={{ fontSize: '45px', width: 75, float: 'left' }}><VscListSelection /></span>
                <h1> Sanji Store</h1>
              </div>
            </div>
            <div>
              <div style={{ height: 48, width: 507, display: 'flex', alignItems: 'center', fontSize: '25px' }}>
                <a href='...' style={{ color: '#62addf', paddingRight: '5px', width: '10%', paddingTop: '5px' }}><RiSearchLine /></a>
                <input className='inputStyle' type="text" placeholder='Tìm kiếm ...' />
                <a href='...' style={{ color: '#62addf', paddingRight: '5px', width: '10%', paddingTop: '5px' }}><TbListSearch /></a>
              </div>
            </div>
            <div style={{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
              <a href="..." style={{ color: '#555555', display: 'flex', width: '70%', textAlign: 'center', alignItems: 'center', textDecoration: 'none' }}>
                <p style={{ color: '#62addf', width: '10%', fontSize: '25px', paddingRight: '12px' }}><AiOutlineUser /></p>
                Đăng nhập/Đăng ký
              </a>
              <a href="..." style={{ color: '#555555', display: 'flex', width: '30%', textAlign: 'center', alignItems: 'center', textDecoration: 'none' }}>
                <p style={{ color: '#62addf', width: '15%', fontSize: '25px', paddingRight: '12px' }}><HiOutlineShoppingCart /></p>
                Giỏ hàng
              </a>
            </div>
          </div>
          <div style={{ height: 69, display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 1201 }}>
              {DATA_LIST.map((x, id) =>
                <div key={id} style={{ fontSize: '14px', backgroundColor: `${x.colorBackgroup}`, borderRadius: '22px' }}>
                  <div style={{ paddingLeft: '15px', paddingRight: '15px', display: 'flex', alignItems: 'center', }}>
                    <p style={{ color: `${x.color}` }}>{x.label}</p>
                    <span style={{ paddingLeft: '5px', fontSize: '25px', paddingTop: '5px', color: `${x.colorIcon}` }}><FiChevronDown /></span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;