import React from 'react';
import { User, Package, MapPin, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface UserDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Logout realizado com sucesso!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
      <button
        onClick={() => {
          navigate('/minha-conta');
          onClose();
        }}
        className="w-full px-4 py-2 text-sm text-primary-700 hover:bg-primary-50 flex items-center space-x-2"
      >
        <User className="h-4 w-4" />
        <span>Minha Conta</span>
      </button>
      
      <button
        onClick={() => {
          navigate('/meus-pedidos');
          onClose();
        }}
        className="w-full px-4 py-2 text-sm text-primary-700 hover:bg-primary-50 flex items-center space-x-2"
      >
        <Package className="h-4 w-4" />
        <span>Meus Pedidos</span>
      </button>
      
      <button
        onClick={() => {
          navigate('/enderecos');
          onClose();
        }}
        className="w-full px-4 py-2 text-sm text-primary-700 hover:bg-primary-50 flex items-center space-x-2"
      >
        <MapPin className="h-4 w-4" />
        <span>Endereços</span>
      </button>
      
      <hr className="my-1" />
      
      <button
        onClick={handleLogout}
        className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
      >
        <LogOut className="h-4 w-4" />
        <span>Sair</span>
      </button>
    </div>
  );
};

export default UserDropdown;