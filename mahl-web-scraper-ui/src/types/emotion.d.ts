declare module '@rebass/emotion' {
  import * as Rebass from 'rebass'
  import {ComponentClass} from 'react'
  import {ThemeProviderProps} from 'emotion-theming'

  // Styled System Types
  export type NumberOrString = Rebass.NumberOrString
  export type Responsive = Rebass.Responsive

  export interface Space extends Rebass.Space {}

  export interface Width extends Rebass.Width {}

  export interface FontSize extends Rebass.FontSize {}

  export interface TextColor extends Rebass.TextColor {}

  export interface BackgroundColor extends Rebass.BackgroundColor {}

  export type Color = TextColor & BackgroundColor

  export interface FontFamily extends Rebass.FontFamily {}
  export interface TextAlign extends Rebass.TextAlign {}
  export interface LineHeight extends Rebass.LineHeight {}

  export interface FontWeight extends Rebass.FontWeight {}

  export interface LetterSpacing extends Rebass.LetterSpacing {}

  // Layout
  export interface Display extends Rebass.Display {}

  export interface MaxWidth extends Rebass.MaxWidth {}

  export interface MinWidth extends Rebass.MinWidth {}

  export interface Height extends Rebass.Height {}

  export interface MaxHeight extends Rebass.MaxHeight {}

  export interface MinHeight extends Rebass.MinHeight {}

  export interface SizeWidth extends Rebass.SizeWidth {}

  export interface SizeHeight extends Rebass.SizeHeight {}

  export type Size = SizeWidth & SizeHeight

  export interface Ratio extends Rebass.Ratio {}

  // Flexbox
  export interface AlignItems extends Rebass.AlignItems {}
  export interface AlignContent extends Rebass.AlignContent {}

  export interface JustifyContent extends Rebass.JustifyContent {}

  export interface FlexWrap extends Rebass.FlexWrap {}
  export interface FlexBasis extends Rebass.FlexBasis {}

  export interface FlexDirection extends Rebass.FlexDirection {}

  export interface Flex extends Rebass.Flex {}

  export interface JustifySelf extends Rebass.JustifySelf {}

  export interface AlignSelf extends Rebass.AlignSelf {}

  export interface Order extends Rebass.Order {}

  // Grid
  export interface GridGap extends Rebass.GridGap {}

  export interface GridColumnGap extends Rebass.GridColumnGap {}

  export interface GridRowGap extends Rebass.GridRowGap {}

  export interface GridColumn extends Rebass.GridColumn {}

  export interface GridRow extends Rebass.GridRow {}

  export interface GridAutoFlow extends Rebass.GridAutoFlow {}

  export interface GridAutoColumns extends Rebass.GridAutoColumns {}

  export interface GridAutoRows extends Rebass.GridAutoRows {}

  export interface GridTemplateColumns extends Rebass.GridTemplateColumns {}

  export interface GridTemplateRows extends Rebass.GridTemplateRows {}

  // Borders
  export interface Border extends Rebass.Border {}

  export interface BorderTop extends Rebass.BorderTop {}

  export interface BorderRight extends Rebass.BorderRight {}

  export interface BorderBottom extends Rebass.BorderBottom {}

  export interface BorderLeft extends Rebass.BorderLeft {}

  export type Borders = Rebass.Borders

  export interface BorderColor extends Rebass.BorderColor {}

  export interface BorderRadius extends Rebass.BorderRadius {}

  export interface BoxShadow extends Rebass.BoxShadow {}

  // Backgrounds
  export interface Background extends Rebass.Background {}

  export interface BackgroundImage extends Rebass.BackgroundImage {}
  export interface BackgroundSize extends Rebass.BackgroundSize {}
  export interface BackgroundPosition extends Rebass.BackgroundPosition {}
  export interface BackgroundRepeat extends Rebass.BackgroundRepeat {}
  // Position
  export interface Position extends Rebass.Position {}

  export interface zIndex extends Rebass.zIndex {}

  export interface Top extends Rebass.Top {}

  export interface Right extends Rebass.Right {}

  export interface Bottom extends Rebass.Bottom {}

  export interface Left extends Rebass.Left {}

  export interface Pseudo extends Rebass.Pseudo {}

  export interface Focus extends Rebass.Focus {}

  export interface Active extends Rebass.Active {}

  export interface Disabled extends Rebass.Disabled {}

  export interface TextStyle extends Rebass.TextStyle {}

  export interface ColorStyle extends Rebass.ColorStyle {}

  export interface ButtonStyle extends Rebass.ButtonStyle {}

  export interface BorderWidth extends Rebass.BorderWidth {}

  export interface Theme extends Rebass.Theme {}

  export const Flex = Rebass.Flex

  export const Box = Rebass.Box

  export const Base = Rebass.Base

  export const CSS = Rebass.CSS

  export const Root = Rebass.Root

  export const Provider = Rebass.Provider

  export const Button = Rebass.Button
  export const ButtonCircle = Rebass.ButtonCircle
  export const ButtonOutline = Rebass.ButtonOutline
  export const ButtonTransparent = Rebass.ButtonTransparent

  export const Link = Rebass.Link

  export const NavLink = Rebass.NavLink

  export const BlockLink = Rebass.BlockLink

  export const Close = Rebass.Close
  export interface TextProps extends Rebass.TextProps {}

  export const Text = Rebass.Text
  export const Heading = Rebass.Heading
  export const Subhead = Rebass.Subhead
  export const Small = Rebass.Small
  export const Lead = Rebass.Lead
  export const Truncate = Rebass.Truncate

  export const Caps = Rebass.Caps

  export const Blockquote = Rebass.Blockquote

  export const Divider = Rebass.Divider

  export const Pre = Rebass.Pre

  export const Code = Rebass.Code

  export const Samp = Rebass.Samp

  export const Measure = Rebass.Measure

  export const Label = Rebass.Label

  export const Input = Rebass.Input

  export const Select = Rebass.Select

  export const Textarea = Rebass.Textarea

  export const Radio = Rebass.Radio

  export const Checkbox = Rebass.Checkbox

  export const Slider = Rebass.Slider

  export const Switch = Rebass.Switch

  export const Image = Rebass.Image

  export const BackgroundImage = Rebass.BackgroundImage

  export const Avatar = Rebass.Avatar

  export const Embed = Rebass.Embed

  export const Container = Rebass.Container

  export const Group = Rebass.Group

  export const Row = Rebass.Row

  export const Column = Rebass.Column

  export const Border = Rebass.Border

  export const Card = Rebass.Card

  export const Panel = Rebass.Panel

  export const Progress = Rebass.Progress

  export const Banner = Rebass.Banner

  export const Message = Rebass.Message

  export const Toolbar = Rebass.Toolbar

  export const Tabs = Rebass.Tabs

  export const Tab = Rebass.Tab

  export const Badge = Rebass.Badge

  export const Circle = Rebass.Circle

  export const Dot = Rebass.Dot

  export const Arrow = Rebass.Arrow

  export const Donut = Rebass.Donut

  export const Position = Rebass.Position

  export const Relative = Rebass.Relative

  export const Absolute = Rebass.Absolute

  export const Fixed = Rebass.Fixed

  export const Sticky = Rebass.Sticky

  export const Modal = Rebass.Modal

  export const Overlay = Rebass.Overlay

  export const Drawer = Rebass.Drawer

  export const Carousel = Rebass.Carousel

  export const Tooltip = Rebass.Tooltip

  // Extended ThemeProviderClass

  type ThemeProviderClass<Theme> = ComponentClass<ThemeProviderProps<Theme>>
  export const Provider: ThemeProviderClass
}
