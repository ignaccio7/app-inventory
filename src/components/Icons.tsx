
import { Ionicons } from '@react-native-vector-icons/ionicons';

interface IconProps {
  size?: number
  color?: string
}

export function IconFolder({ size = 24, color = "#465d92" }: IconProps) {
  return <Ionicons name="folder-open-outline" size={size} color={color} />;
}

export function IconNewFolder({ size = 26, color = "#bc151b" }: IconProps) {
  return <Ionicons name="folder-sharp" size={size} color={color} />;
}

export function IconCamera({ size = 24, color = "#ffffff" }: IconProps) {
  return <Ionicons name="camera-outline" size={size} color={color} />;
}

export function IconSearch({ size = 20, color = "#474740" }: IconProps) {
  return <Ionicons name="search-outline" size={size} color={color} />;
}