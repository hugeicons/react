declare module '@hugeicons/core-free-icons/*' {
  const icon:
    | [string, { [key: string]: string | number }][]
    | readonly (readonly [string, { readonly [key: string]: string | number }])[];
  export default icon;
}
